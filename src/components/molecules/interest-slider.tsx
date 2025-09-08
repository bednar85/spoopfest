import { RatingGroup } from "@chakra-ui/react"
import { type FC, useState } from "react"
import { useVotingContext } from "@/contexts/voting/hook"

const emojiMap: Record<string, string> = {
  1: "😐",
  2: "🤔",
  3: "🙂",
  4: "😃",
}

type Props = {
  currentMovieTitle?: string;
}

export const InterestSlider: FC<Props> = ({ currentMovieTitle }) => {
  const { status } = useVotingContext();

  const [value, setValue] = useState(1);

  const logStatus = () =>  {
    console.log('');
    console.log('InterestSlider');
    console.log('  status:', status);
    console.log('  currentMovieTitle:', currentMovieTitle);
    console.log('  value:', value);
  };
  

  // onValueChange we should also update some global state or context, a global "interest map"

  return (
    <RatingGroup.Root
      count={4}
      defaultValue={1}
      onValueChange={(e) => {
        logStatus()
        setValue(e.value)
      }}
      value={value}
    >
      <RatingGroup.Control>
        {Array.from({ length: 4 }).map((_, index) => (
          <RatingGroup.Item
            key={index}
            index={index + 1}
            minW="9"
            filter={{ base: "grayscale(1)", _checked: "revert" }}
            transition="scale 0.1s"
            _hover={{ scale: "1.1" }}
          >
            {emojiMap[index + 1]}
          </RatingGroup.Item>
        ))}
      </RatingGroup.Control>
    </RatingGroup.Root>
  )
}