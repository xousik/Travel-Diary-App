import { useState, useEffect, SetStateAction } from "react";
import TravelCard from "../../molecules/travelCard";
import SkeletonTravelCard from "../../molecules/skeletonLoading/skeletonTravelCard";

export type Diary = {
  id: string;
  userId: string;
  title: string;
  description: string;
  date: string;
  icon: string;
  imagesId: string[];
};

export default function TravelCards({
  refresh,
  setRefresh,
  areLimited,
  setHowManyDiaries,
  activeYear,
}: {
  refresh: boolean;
  setRefresh: React.Dispatch<SetStateAction<boolean>>;
  areLimited: boolean;
  setHowManyDiaries?: React.Dispatch<SetStateAction<number | undefined>>;
  activeYear?: number;
}) {
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (data: Diary[]) => {
    const sortedData = [...data].sort((a, b) => {
      const dateA: any = new Date(a.date);
      const dateB: any = new Date(b.date);

      return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
    });

    setSortOrder(sortOrder === "asc" ? "asc" : "desc");
    return sortedData;
  };

  const activeYearString = activeYear?.toString();

  const apiLink = "http://localhost:3000/api/diary";

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Is that path ok ? Or should change it to work properly on production
        await fetch(apiLink)
          .then((response) => response.json())
          .then((data: Diary[]) => {
            const filteredData = data.filter((diary) =>
              diary.date.includes(activeYearString!)
            );

            if (areLimited) {
              const sortedData = handleSort(data);
              setDiaries(
                sortedData
                  .slice(sortedData.length - 3, sortedData.length)
                  .reverse()
              );
            } else {
              const sortedData = handleSort(filteredData);
              setDiaries(sortedData.reverse());
            }
            setHowManyDiaries && setHowManyDiaries(data.length);
            setIsLoading(false);
          });
      } catch (error) {
        console.error("Error fetching user diaries:", error);
      }
    };

    fetchData();
    // It's to remove warning about missing dependency - handleSort function in the dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh, areLimited, setHowManyDiaries]);

  const handleDelete = async (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>,
    travelCardId: string
  ) => {
    e.stopPropagation();

    console.log("Delete button clicked");

    await fetch("http://localhost:3000/api/deleteDiary", {
      method: "POST",
      body: JSON.stringify({ id: travelCardId }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        if (response.ok) {
          setRefresh!((prev) => !prev);
          const data = await response.json();
          console.log(data.message);
        } else {
          const errorData = await response.json();
          console.error("Error:", errorData.message);
        }
      })
      .catch((error) => {
        console.error("Network error:", error);
      });
  };

  return (
    <>
      {isLoading && areLimited
        ? Array(3)
            .fill(0)
            .map((_, i) => <SkeletonTravelCard key={i} />)
        : diaries.map((diary: Diary) => (
            <TravelCard
              key={diary.id}
              id={diary.id}
              title={diary.title}
              date={diary.date}
              icon={diary.icon}
              description={diary.description}
              images={diary.imagesId}
              handleDelete={handleDelete}
            />
          ))}
    </>
  );
}
