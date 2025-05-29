import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Star, Sparkles } from "lucide-react";

interface ZodiacSign {
  name: string;
  symbol: string;
  element: string;
  quality: string;
  rulingPlanet: string;
  dateRange: string;
  traits: string[];
  strengths: string[];
  weaknesses: string[];
  description: string;
}

const zodiacSigns: Record<string, ZodiacSign[]> = {
  January: [
    {
      name: "Capricorn",
      symbol: "♑",
      element: "Earth",
      quality: "Cardinal",
      rulingPlanet: "Saturn",
      dateRange: "December 22 - January 19",
      traits: ["Ambitious", "Disciplined", "Patient", "Responsible"],
      strengths: ["Self-control", "Good managers", "Disciplined", "Responsible"],
      weaknesses: ["Know-it-all", "Unforgiving", "Condescending", "Expecting the worst"],
      description: "Capricorn is a sign that represents time and responsibility. Its representatives are traditional and often very serious by nature. These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives."
    },
    {
      name: "Aquarius",
      symbol: "♒",
      element: "Air",
      quality: "Fixed",
      rulingPlanet: "Uranus",
      dateRange: "January 20 - February 18",
      traits: ["Progressive", "Original", "Independent", "Humanitarian"],
      strengths: ["Progressive", "Original", "Independent", "Humanitarian"],
      weaknesses: ["Runs from emotional expression", "Temperamental", "Uncompromising", "Aloof"],
      description: "Aquarius-born are shy and quiet, but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others."
    }
  ],
  February: [
    {
      name: "Aquarius",
      symbol: "♒",
      element: "Air",
      quality: "Fixed",
      rulingPlanet: "Uranus",
      dateRange: "January 20 - February 18",
      traits: ["Progressive", "Original", "Independent", "Humanitarian"],
      strengths: ["Progressive", "Original", "Independent", "Humanitarian"],
      weaknesses: ["Runs from emotional expression", "Temperamental", "Uncompromising", "Aloof"],
      description: "Aquarius-born are shy and quiet, but on the other hand they can be eccentric and energetic. However, in both cases, they are deep thinkers and highly intellectual people who love helping others."
    },
    {
      name: "Pisces",
      symbol: "♓",
      element: "Water",
      quality: "Mutable",
      rulingPlanet: "Neptune",
      dateRange: "February 19 - March 20",
      traits: ["Compassionate", "Artistic", "Intuitive", "Gentle"],
      strengths: ["Compassionate", "Artistic", "Intuitive", "Gentle", "Wise", "Musical"],
      weaknesses: ["Fearful", "Overly trusting", "Sad", "Desire to escape reality"],
      description: "Pisces are very friendly and often find themselves in company of very different people. They are selfless and always willing to help others, a very fine intent for as long as they don't expect anything in return."
    }
  ],
  March: [
    {
      name: "Pisces",
      symbol: "♓",
      element: "Water",
      quality: "Mutable",
      rulingPlanet: "Neptune",
      dateRange: "February 19 - March 20",
      traits: ["Compassionate", "Artistic", "Intuitive", "Gentle"],
      strengths: ["Compassionate", "Artistic", "Intuitive", "Gentle", "Wise", "Musical"],
      weaknesses: ["Fearful", "Overly trusting", "Sad", "Desire to escape reality"],
      description: "Pisces are very friendly and often find themselves in company of very different people. They are selfless and always willing to help others, a very fine intent for as long as they don't expect anything in return."
    },
    {
      name: "Aries",
      symbol: "♈",
      element: "Fire",
      quality: "Cardinal",
      rulingPlanet: "Mars",
      dateRange: "March 21 - April 19",
      traits: ["Courageous", "Determined", "Confident", "Enthusiastic"],
      strengths: ["Courageous", "Determined", "Confident", "Enthusiastic", "Optimistic", "Honest"],
      weaknesses: ["Impatient", "Moody", "Short-tempered", "Impulsive", "Aggressive"],
      description: "As the first sign in the zodiac, the presence of Aries always marks the beginning of something energetic and turbulent. They are continuously looking for dynamic, speed and competition, always being the first in everything."
    }
  ],
  April: [
    {
      name: "Aries",
      symbol: "♈",
      element: "Fire",
      quality: "Cardinal",
      rulingPlanet: "Mars",
      dateRange: "March 21 - April 19",
      traits: ["Courageous", "Determined", "Confident", "Enthusiastic"],
      strengths: ["Courageous", "Determined", "Confident", "Enthusiastic", "Optimistic", "Honest"],
      weaknesses: ["Impatient", "Moody", "Short-tempered", "Impulsive", "Aggressive"],
      description: "As the first sign in the zodiac, the presence of Aries always marks the beginning of something energetic and turbulent. They are continuously looking for dynamic, speed and competition, always being the first in everything."
    },
    {
      name: "Taurus",
      symbol: "♉",
      element: "Earth",
      quality: "Fixed",
      rulingPlanet: "Venus",
      dateRange: "April 20 - May 20",
      traits: ["Reliable", "Patient", "Practical", "Devoted"],
      strengths: ["Reliable", "Patient", "Practical", "Devoted", "Responsible", "Stable"],
      weaknesses: ["Stubborn", "Possessive", "Uncompromising"],
      description: "Practical and well-grounded, Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures."
    }
  ],
  May: [
    {
      name: "Taurus",
      symbol: "♉",
      element: "Earth",
      quality: "Fixed",
      rulingPlanet: "Venus",
      dateRange: "April 20 - May 20",
      traits: ["Reliable", "Patient", "Practical", "Devoted"],
      strengths: ["Reliable", "Patient", "Practical", "Devoted", "Responsible", "Stable"],
      weaknesses: ["Stubborn", "Possessive", "Uncompromising"],
      description: "Practical and well-grounded, Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures."
    },
    {
      name: "Gemini",
      symbol: "♊",
      element: "Air",
      quality: "Mutable",
      rulingPlanet: "Mercury",
      dateRange: "May 21 - June 20",
      traits: ["Gentle", "Affectionate", "Curious", "Adaptable"],
      strengths: ["Gentle", "Affectionate", "Curious", "Adaptable", "Quick learner"],
      weaknesses: ["Nervous", "Inconsistent", "Indecisive"],
      description: "Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless."
    }
  ],
  June: [
    {
      name: "Gemini",
      symbol: "♊",
      element: "Air",
      quality: "Mutable",
      rulingPlanet: "Mercury",
      dateRange: "May 21 - June 20",
      traits: ["Gentle", "Affectionate", "Curious", "Adaptable"],
      strengths: ["Gentle", "Affectionate", "Curious", "Adaptable", "Quick learner"],
      weaknesses: ["Nervous", "Inconsistent", "Indecisive"],
      description: "Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless."
    },
    {
      name: "Cancer",
      symbol: "♋",
      element: "Water",
      quality: "Cardinal",
      rulingPlanet: "Moon",
      dateRange: "June 21 - July 22",
      traits: ["Tenacious", "Highly imaginative", "Loyal", "Emotional"],
      strengths: ["Tenacious", "Highly imaginative", "Loyal", "Emotional", "Sympathetic", "Persuasive"],
      weaknesses: ["Moody", "Pessimistic", "Suspicious", "Manipulative", "Insecure"],
      description: "Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home."
    }
  ],
  July: [
    {
      name: "Cancer",
      symbol: "♋",
      element: "Water",
      quality: "Cardinal",
      rulingPlanet: "Moon",
      dateRange: "June 21 - July 22",
      traits: ["Tenacious", "Highly imaginative", "Loyal", "Emotional"],
      strengths: ["Tenacious", "Highly imaginative", "Loyal", "Emotional", "Sympathetic", "Persuasive"],
      weaknesses: ["Moody", "Pessimistic", "Suspicious", "Manipulative", "Insecure"],
      description: "Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home."
    },
    {
      name: "Leo",
      symbol: "♌",
      element: "Fire",
      quality: "Fixed",
      rulingPlanet: "Sun",
      dateRange: "July 23 - August 22",
      traits: ["Creative", "Passionate", "Generous", "Warm-hearted"],
      strengths: ["Creative", "Passionate", "Generous", "Warm-hearted", "Cheerful", "Humorous"],
      weaknesses: ["Arrogant", "Stubborn", "Self-centered", "Lazy", "Inflexible"],
      description: "People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to."
    }
  ],
  August: [
    {
      name: "Leo",
      symbol: "♌",
      element: "Fire",
      quality: "Fixed",
      rulingPlanet: "Sun",
      dateRange: "July 23 - August 22",
      traits: ["Creative", "Passionate", "Generous", "Warm-hearted"],
      strengths: ["Creative", "Passionate", "Generous", "Warm-hearted", "Cheerful", "Humorous"],
      weaknesses: ["Arrogant", "Stubborn", "Self-centered", "Lazy", "Inflexible"],
      description: "People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to."
    },
    {
      name: "Virgo",
      symbol: "♍",
      element: "Earth",
      quality: "Mutable",
      rulingPlanet: "Mercury",
      dateRange: "August 23 - September 22",
      traits: ["Loyal", "Analytical", "Kind", "Hardworking"],
      strengths: ["Loyal", "Analytical", "Kind", "Hardworking", "Practical"],
      weaknesses: ["Shyness", "Worry", "Overly critical", "All work and no play"],
      description: "Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance."
    }
  ],
  September: [
    {
      name: "Virgo",
      symbol: "♍",
      element: "Earth",
      quality: "Mutable",
      rulingPlanet: "Mercury",
      dateRange: "August 23 - September 22",
      traits: ["Loyal", "Analytical", "Kind", "Hardworking"],
      strengths: ["Loyal", "Analytical", "Kind", "Hardworking", "Practical"],
      weaknesses: ["Shyness", "Worry", "Overly critical", "All work and no play"],
      description: "Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance."
    },
    {
      name: "Libra",
      symbol: "♎",
      element: "Air",
      quality: "Cardinal",
      rulingPlanet: "Venus",
      dateRange: "September 23 - October 22",
      traits: ["Cooperative", "Diplomatic", "Gracious", "Fair-minded"],
      strengths: ["Cooperative", "Diplomatic", "Gracious", "Fair-minded", "Social"],
      weaknesses: ["Indecisive", "Avoids confrontations", "Self-pity", "Carries grudges"],
      description: "People born under the sign of Libra are peaceful, fair, and they hate being alone. Partnership is very important for them, seeking someone with the ability to be the mirror to themselves."
    }
  ],
  October: [
    {
      name: "Libra",
      symbol: "♎",
      element: "Air",
      quality: "Cardinal",
      rulingPlanet: "Venus",
      dateRange: "September 23 - October 22",
      traits: ["Cooperative", "Diplomatic", "Gracious", "Fair-minded"],
      strengths: ["Cooperative", "Diplomatic", "Gracious", "Fair-minded", "Social"],
      weaknesses: ["Indecisive", "Avoids confrontations", "Self-pity", "Carries grudges"],
      description: "People born under the sign of Libra are peaceful, fair, and they hate being alone. Partnership is very important for them, seeking someone with the ability to be the mirror to themselves."
    },
    {
      name: "Scorpio",
      symbol: "♏",
      element: "Water",
      quality: "Fixed",
      rulingPlanet: "Pluto",
      dateRange: "October 23 - November 21",
      traits: ["Resourceful", "Brave", "Passionate", "Stubborn"],
      strengths: ["Resourceful", "Brave", "Passionate", "Stubborn", "True friend"],
      weaknesses: ["Distrusting", "Jealous", "Secretive", "Violent"],
      description: "Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness."
    }
  ],
  November: [
    {
      name: "Scorpio",
      symbol: "♏",
      element: "Water",
      quality: "Fixed",
      rulingPlanet: "Pluto",
      dateRange: "October 23 - November 21",
      traits: ["Resourceful", "Brave", "Passionate", "Stubborn"],
      strengths: ["Resourceful", "Brave", "Passionate", "Stubborn", "True friend"],
      weaknesses: ["Distrusting", "Jealous", "Secretive", "Violent"],
      description: "Scorpio-born are passionate and assertive people. They are determined and decisive, and will research until they find out the truth. Scorpio is a great leader, always aware of the situation and also features prominently in resourcefulness."
    },
    {
      name: "Sagittarius",
      symbol: "♐",
      element: "Fire",
      quality: "Mutable",
      rulingPlanet: "Jupiter",
      dateRange: "November 22 - December 21",
      traits: ["Generous", "Idealistic", "Great sense of humor"],
      strengths: ["Generous", "Idealistic", "Great sense of humor"],
      weaknesses: ["Promises more than can deliver", "Very impatient", "Will say anything"],
      description: "Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life."
    }
  ],
  December: [
    {
      name: "Sagittarius",
      symbol: "♐",
      element: "Fire",
      quality: "Mutable",
      rulingPlanet: "Jupiter",
      dateRange: "November 22 - December 21",
      traits: ["Generous", "Idealistic", "Great sense of humor"],
      strengths: ["Generous", "Idealistic", "Great sense of humor"],
      weaknesses: ["Promises more than can deliver", "Very impatient", "Will say anything"],
      description: "Curious and energetic, Sagittarius is one of the biggest travelers among all zodiac signs. Their open mind and philosophical view motivates them to wander around the world in search of the meaning of life."
    },
    {
      name: "Capricorn",
      symbol: "♑",
      element: "Earth",
      quality: "Cardinal",
      rulingPlanet: "Saturn",
      dateRange: "December 22 - January 19",
      traits: ["Ambitious", "Disciplined", "Patient", "Responsible"],
      strengths: ["Self-control", "Good managers", "Disciplined", "Responsible"],
      weaknesses: ["Know-it-all", "Unforgiving", "Condescending", "Expecting the worst"],
      description: "Capricorn is a sign that represents time and responsibility. Its representatives are traditional and often very serious by nature. These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives."
    }
  ]
};

export function ZodiacPage() {
  const currentDate = new Date();
  // Always use English for month keys to match zodiacSigns object
  const currentMonthEnglish = currentDate.toLocaleString('en-US', { month: 'long' });
  // Use user's locale for display
  const currentMonthDisplay = currentDate.toLocaleString('default', { month: 'long' });
  const currentDay = currentDate.getDate();
  const signs = zodiacSigns[currentMonthEnglish] || [];

  // Determine which sign is currently active based on the date
  const getCurrentSign = () => {
    if (signs.length === 0) return null;
    
    // For months with two signs, check the date
    if (signs.length === 2) {
      const firstSignEndDay = parseInt(signs[0].dateRange.split(' - ')[1].split(' ')[1]);
      return currentDay <= firstSignEndDay ? signs[0] : signs[1];
    }
    
    return signs[0];
  };

  const currentSign = getCurrentSign();

  const getElementColor = (element: string) => {
    switch (element) {
      case "Fire": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "Earth": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "Air": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case "Water": return "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-2">
          <Calendar className="h-8 w-8" />
          {currentMonthDisplay} Zodiac Signs
        </h1>
        <p className="text-lg text-muted-foreground">
          Today is {currentDate.toLocaleDateString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
      </div>

      {currentSign && (
        <Card className="mb-8 border-2 border-primary/20">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl flex items-center gap-2">
                <Star className="h-6 w-6 text-yellow-500" />
                Current Zodiac Sign
              </CardTitle>
              <span className="text-4xl">{currentSign.symbol}</span>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-xl font-semibold">{currentSign.name}</h3>
              <Badge className={getElementColor(currentSign.element)}>{currentSign.element}</Badge>
              <Badge variant="outline">{currentSign.quality}</Badge>
            </div>
            <p className="text-muted-foreground mb-2">
              <strong>Date Range:</strong> {currentSign.dateRange}
            </p>
            <p className="text-muted-foreground mb-4">
              <strong>Ruling Planet:</strong> {currentSign.rulingPlanet}
            </p>
            <p className="mb-4">{currentSign.description}</p>
          </CardContent>
        </Card>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {signs.map((sign, index) => (
          <Card key={index} className={currentSign?.name === sign.name ? "ring-2 ring-primary" : ""}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl flex items-center gap-2">
                  {sign.name}
                  {currentSign?.name === sign.name && (
                    <Sparkles className="h-5 w-5 text-yellow-500" />
                  )}
                </CardTitle>
                <span className="text-3xl">{sign.symbol}</span>
              </div>
              <CardDescription>{sign.dateRange}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge className={getElementColor(sign.element)}>{sign.element}</Badge>
                  <Badge variant="outline">{sign.quality}</Badge>
                  <Badge variant="secondary">{sign.rulingPlanet}</Badge>
                </div>

                <p className="text-sm">{sign.description}</p>

                <div>
                  <h4 className="font-semibold mb-2 text-sm">Key Traits</h4>
                  <div className="flex flex-wrap gap-1">
                    {sign.traits.map((trait, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {trait}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-green-600 dark:text-green-400">Strengths</h4>
                    <ul className="text-xs space-y-1">
                      {sign.strengths.map((strength, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-green-600 dark:text-green-400">•</span>
                          {strength}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-sm text-red-600 dark:text-red-400">Weaknesses</h4>
                    <ul className="text-xs space-y-1">
                      {sign.weaknesses.map((weakness, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-red-600 dark:text-red-400">•</span>
                          {weakness}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}