export interface IntakeFormData {
  primaryVehicle: string; secondaryVehicle?: string; preferredColors: string
  requiredOptions: string; acceptableAlternatives?: string; budget: string
  financingStatus: string; tradeInVehicle?: string; shippingDestination: string
  purchaseTimeline: string; currentVehicleSituation?: string; referralSource?: string
  readyToMove: 'yes' | 'no'; fullName: string; email: string; phone: string
}
