import { useState, useEffect, SetStateAction } from "react";
import TravelCard from "../../molecules/travelCard";

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
}: {
  refresh: boolean;
  setRefresh: React.Dispatch<SetStateAction<boolean>>;
  areLimited: boolean;
}) {
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const apiLink = "http://localhost:3000/api/diary";

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Is that path ok ? Or should change it to work properly on production
        await fetch(apiLink)
          .then((response) => response.json())
          .then((data) => {
            // Set max amount of travel cards to 3
            if (areLimited) {
              setDiaries(data.slice(-3).reverse());
            } else {
              setDiaries(data);
            }
            setIsLoading(false);
          });
      } catch (error) {
        console.error("Error fetching user diaries:", error);
      }
    };

    fetchData();
  }, [refresh, areLimited]);

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
      {isLoading ? (
        <h3>Loading diaries ....</h3>
      ) : (
        diaries.map((diary: Diary) => (
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
        ))
      )}
    </>
  );
}
