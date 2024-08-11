import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateTime(dateStr: string) {
  const dateObj = new Date(dateStr);

  // Extract day, month, year, hours, and minutes
  const day = dateObj.getDate();
  const month = dateObj.toLocaleString('en-US', { month: 'long' }); // Full month name
  const year = dateObj.getFullYear();
  let hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert hours from 24-hour format to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // The hour '0' should be '12'

  // Format minutes to always be two digits
  const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;

  // Combine everything into the desired format
  const formattedDate = `${day} ${month} ${year} : ${hours}:${formattedMinutes}${ampm}`;

  return formattedDate;
}

export function formatDateThread(dateStr: string) {
  const dateObj = new Date(dateStr);

  // Get today's date
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set time to midnight to compare only the date

  // Get yesterday's date
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);

  // Compare the input date with today and yesterday
  if (dateObj >= today) {
    return "Today";
  } else if (dateObj >= yesterday) {
    return "Yesterday";
  } else {
    // Format the date as "Month day, year"
    const day = dateObj.getDate();
    const month = dateObj.toLocaleString('en-US', { month: 'long' }); // Full month name
    const year = dateObj.getFullYear();
    return `${month} ${day}, ${year}`;
  }
}