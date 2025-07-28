import { Course } from '@/types/api';

const API_BASE_URL = 'https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course';

export async function getCourseData(lang: 'en' | 'bn' = 'en'): Promise<Course> {
  const headers = new Headers({
    'X-TENMS-SOURCE-PLATFORM': 'web',
    'accept': 'application/json'
  });

  const url = `${API_BASE_URL}?lang=${lang}`;
  const response = await fetch(url, { headers });

  if (!response.ok) {
    throw new Error(`Failed to fetch course data: ${response.statusText}`);
  }

  const result = await response.json();
  return result.data as Course;
}