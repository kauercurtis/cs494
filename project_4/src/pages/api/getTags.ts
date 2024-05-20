import { NextApiRequest, NextApiResponse } from "next"
import { Genre } from "../../app/genre" 

export default async function handler(req: NextApiRequest, res: NextApiResponse<{ tagNames: string[] }>) {
  try {
    const response = await fetch('https://ws.audioscrobbler.com/2.0/?method=tag.getTopTags&api_key=YOUR_API_KEY&format=json');

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data: LastFMTopTagsResponse = await response.json(); // Define the response type

    const tagNames: string[] = data.results?.tag.map((tag: Tag) => tag.name) || [];

    res.status(200).json({ tagNames });
  } catch (error) {
    console.error(error);
  }
}

// Define expected response structure (partial)
interface LastFMTopTagsResponse {
  results: { tag: Tag[] };
}

interface Tag {
  name: string;
}
