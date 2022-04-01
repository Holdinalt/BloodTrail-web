export class NavbarPieceModel {

  constructor(public name: string, public options: NavOption[]) {
  }

}

export class NavOption{
  constructor(public name: string, public selector: string, public img?: string) {
  }
}
