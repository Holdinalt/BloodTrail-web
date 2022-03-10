export class NavbarPiece{

  constructor(public name: string, public options: NavOption[]) {
  }

}

export class NavOption{
  constructor(public name: string, public selector: string) {
  }
}
