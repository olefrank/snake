interface IEventListener {
  enable(): void;
  disable(): void;
  handleEvt(e: any): void;
}
export default IEventListener;
