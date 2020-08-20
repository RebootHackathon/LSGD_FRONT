import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UploadBulk from './UploadBulk';

describe('<UploadBulk />', () => {
  test('it should mount', () => {
    render(<UploadBulk />);
    
    const uploadBulk = screen.getByTestId('UploadBulk');

    expect(uploadBulk).toBeInTheDocument();
  });
});