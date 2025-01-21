export interface Recruitment {
  id: number;
  recruitmentId: string;
  ownerId: string;
  destinationPrefecture: string;
  destinationAddress: string;
  destinationDescription: string;
  depaturePrefecture: string;
  depatureAddress: string;
  depatureDescription: string;
  startDateTime: Date;
  endDateTime: Date;
  maxParticipant: number;
  budget: number;
  description: string;
  applyingEndDateTime: Date;
  applyingProjectionUpdater: {
    id: number;
    applyingId: string;
    recruitmentId: string;
    userId: string;
    firstPickUpOptionPrefecture: string;
    firstPickUpOptionAddress: string;
    firstPickUpOptionDescription: string;
    status: string;
    secondPickUpOptionPrefecture: string;
    secondPickUpOptionAddress: string;
    secondPickUpOptionDescription: string;
    thirdPickUpOptionPrefecture: string;
    thirdPickUpOptionAddress: string;
    thirdPickUpOptionDescription: string;
    determinePickUpOption: number | null;
    determinePickUpDateTime: Date | null;
  }[];
}
