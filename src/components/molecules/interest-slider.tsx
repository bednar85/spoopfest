import { RatingGroup } from "@chakra-ui/react"
import { type FC } from "react"

const emojiMap: Record<string, string> = {
  1: "😐",
  2: "🤔",
  3: "🙂",
  4: "😃",
}

export const InterestSlider: FC = () => {
  return (
    <RatingGroup.Root count={4} defaultValue={1}>
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