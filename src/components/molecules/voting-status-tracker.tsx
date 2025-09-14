import { Box, Tabs } from '@chakra-ui/react';

import { type FC } from 'react';

export const VotingStatusTracker: FC = () => {
  return (
    <Box w="25vw">
      <Tabs.Root defaultValue="kinda-interested">
        <Tabs.List>
          <Tabs.Trigger value="kinda-interested">Kinda Interested</Tabs.Trigger>
          <Tabs.Trigger value="interested">Interested</Tabs.Trigger>
          <Tabs.Trigger value="very-interested">Very Interested</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="kinda-interested">
          Kinda Interested List
        </Tabs.Content>
        <Tabs.Content value="interested">Interested List</Tabs.Content>
        <Tabs.Content value="very-interested">
          Very Interested List
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  );
};
