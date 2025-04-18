export let userDetails:any[] = []

export function setDetails(data: any): void {
  userDetails = data; // Store API response
}
export function getDetails(): any {
  return userDetails; // Return stored data
}
