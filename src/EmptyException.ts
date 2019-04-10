class EmptyException extends Error {
  constructor(type: string) {
    super();
    this.name = `${type} is Empty`;
  }
}

export default EmptyException;
