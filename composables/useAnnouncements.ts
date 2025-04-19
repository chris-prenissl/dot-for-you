import type { Announcement } from "~/model/Announcement";

export function useAnnouncements() {
  const announcements: Announcement[] = [
    {
      title: "Frühlingsmarkt Kallmünz",
      dateText: "03.05.2025",
      location: "Kallmünz",
      startDate: "2025-05-03",
    },
    {
      title: "Sarchinger Frühlingsfest",
      dateText: "12.04.2025 - 13 bis 17 Uhr",
      location: "Außenbereich Haus der Vereine, Sarching",
      startDate: "2025-04-12",
    },
  ];

  const isDateExpired = (formattedDate: string): boolean => {
    const expiredDate = new Date(formattedDate);
    expiredDate.setDate(expiredDate.getDate() + 1);
    const now = new Date();
    return now > expiredDate;
  };

  const compareExpiredAnnouncement = (
    a: Announcement,
    b: Announcement
  ): number => {
    const aDate = new Date(a.startDate);
    const bDate = new Date(b.startDate);
    return aDate.getTime() - bDate.getTime();
  };

  const activeAnnouncements = computed(() =>
    announcements
      .filter((value) => !isDateExpired(value.startDate))
      .sort(compareExpiredAnnouncement)
  );

  const hasActiveAnnouncements = computed(
    () => activeAnnouncements.value.length > 0
  );

  return {
    activeAnnouncements,
    hasActiveAnnouncements,
  };
}
