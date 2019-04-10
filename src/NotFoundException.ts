class NotFoundException extends Error {
  constructor() {
    super('Item not found');
  }
}

export default NotFoundException;
