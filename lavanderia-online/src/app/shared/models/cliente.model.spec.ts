import { Cliente } from './cliente.model';

describe('Cliente', () => {
  it('should create an instance', () => {
    expect(new Cliente(1, 'João Fernando', 'Rua teste 123')).toBeTruthy();
  });
});
