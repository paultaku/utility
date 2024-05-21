import { debounce } from './debounce';

describe('debounce', () => {
  const mock = jest.fn();
  let mockFunction: VoidFunction
  beforeEach(() => {
    mock.mockClear();
    mockFunction = () => {
      mock();
    };
  });

  it('should work', (done) => {
    expect(debounce(mockFunction)).toBeTruthy();
    done();
  });

  it('should call once in 500ms', (done) => {
    const exec = debounce(mockFunction);
    for (const _ of Array(10).keys()) {
      exec();
    }
    setTimeout(() => {
      expect(mock).toHaveBeenCalled();
      expect(mock).toHaveBeenCalledTimes(1);
      done();
    }, 1000);
  });
});
