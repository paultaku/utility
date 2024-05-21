import { throttle } from './throttle';

describe('throttle', () => {
    const mock = jest.fn();
    let mockFunction: VoidFunction
    beforeEach(() => {
        mock.mockClear();
        mockFunction = () => {
            mock();
        };
    });

    it('should work', (done) => {
        expect(throttle(mockFunction)).toBeTruthy();
        done();
    });

    it('should call once in 500ms', (done) => {
        const exec = throttle(mockFunction, 100);

        for (const _ of Array(10).keys()) {
            exec();
        }

        setTimeout(() => {
            expect(mock).toHaveBeenCalled();
            expect(mock).toHaveBeenCalledTimes(1);
            done();
        }, 500);
    });
});
