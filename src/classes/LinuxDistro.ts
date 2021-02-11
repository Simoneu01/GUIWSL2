class LinuxDistro {
  constructor(public name: string, public version: number, public status:string) {}

  changeStatus(newStatus: string): void {
    console.log("ChangeStatus")
    this.status = newStatus
  }

  changeVersion(newVersion: number): void {
    console.log("ChangeStatus")
    this.version = newVersion
  }
}

export default LinuxDistro