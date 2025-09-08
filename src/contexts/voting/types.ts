export type VotingStatus = {
  1: string[],
  2: string[],
  3: string[],
  4: string[],
}

export interface VotingContextReturnType {
  status: VotingStatus
  onChangeHandler: (currentValue: number, newValue: number, movieTitle: string) => void
}