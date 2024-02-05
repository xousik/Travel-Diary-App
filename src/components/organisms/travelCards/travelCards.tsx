import { useState, useEffect } from "react";
import TravelCard from "../../molecules/travelCard";

export type Diary = {
  id: string;
  userId: string;
  title: string;
  description: string;
  date: string;
  icon: string;
};

export default function TravelCards({
  refresh,
  areLimited,
}: {
  refresh?: boolean;
  areLimited: boolean;
}) {
  const [diaries, setDiaries] = useState<Diary[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Is that path ok ? Or should change it to work properly on production
        const response = await fetch("http://localhost:3000/api/diary");
        const data = await response.json();

        // Set max amount of travel cards to 3
        if (areLimited) {
          setDiaries(data.slice(-3).reverse());
        } else {
          setDiaries(data);
        }
      } catch (error) {
        console.error("Error fetching user diaries:", error);
      }
    };

    fetchData();
  }, [refresh, areLimited]);

  return (
    <>
      {!diaries.length ? (
        <h3>Loading diaries ....</h3>
      ) : (
        diaries.map((diary: Diary) => (
          <TravelCard
            key={diary.id}
            title={diary.title}
            date={diary.date}
            icon={diary.icon}
            description={diary.description}
          />
        ))
      )}
    </>
  );
}
