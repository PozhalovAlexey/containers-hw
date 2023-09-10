
const errorRepo = new ErrorRepository()
test('should add an error with code and description', () => {
    errorRepo.addError(1, 'First error');
    errorRepo.addError(2, 'Second error');

    expect(errorRepo.translate(1)).toEqual('First error');
    expect(errorRepo.translate(2)).toEqual('Second error');
});