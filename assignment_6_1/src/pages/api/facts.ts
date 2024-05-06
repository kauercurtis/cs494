import { NextApiRequest, NextApiResponse } from "next"

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<{rFacts: string[]}>
  ) {
    const facts: string[] = [];
    facts[0] = "The population of the earth is estimated to be over 8 billion people, but there are more than 10 quintillion (that's 10,000,000,000,000,000,000) ants alive at any given time!";
    facts[1] = "The worlds quietest room is located at Microsofts headquarters in Washington. Its so quiet you can actually hear your own heartbeat.";
    facts[2] = "Cats can jump up to six times their own body length!";
    facts[3] = "Ostriches can run faster than humans, reaching speeds of up to 70 kilometers per hour.";
    facts[4] = "The chemical compound responsible for the spiciness of chili peppers is called capsaicin. It tricks your body into thinking your mouth is on fire!";

    const randomFacts: string[] = [];
    // const randomIndex = Math.floor(Math.random() * facts.length);
    const count = Number(req.query.count);

    for(let index = 0; index < count; index++){
      randomFacts.push(facts[Math.floor(Math.random() * facts.length)])
    }

    console.log(randomFacts);

    res.status(200).json({ rFacts: randomFacts })
}