export let plotDetails:any[] = []

export function setPlotDetails(data: any): void {
  plotDetails = data; // Store API response
}
export function getPlotDetails(): any {
  return plotDetails; // Return stored data
}
