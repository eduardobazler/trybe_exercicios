import { createRandomNumber } from './service';

describe('Primeiro exercício', () => {
  it("Verify the fetrurn of funciton 'Create Random Number'", () => {
    createRandomNumber = jest.fn();
  });
})