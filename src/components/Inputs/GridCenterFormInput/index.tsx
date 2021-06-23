import {
  Grid,
  FormControl,
  Input,
  InputLabel,
  InputProps
} from '@material-ui/core';
import styled from 'styled-components';

interface GridCenteInput extends InputProps {
  gridClassName: string;
  label: string;
}

const StyledGridCenterFormInput = styled(Grid)`
  .form-control-input {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    .form-control-input {
      min-width: 220px;
    }
  }
`;

export const GridCenterFormInput = (props: GridCenteInput) => {
  const { gridClassName, required, label, ...rest } = props;
  return (
    <StyledGridCenterFormInput
      container
      justify='center'
      className={gridClassName}
    >
      <FormControl className='form-control-input'>
        <InputLabel required={required}>{label}</InputLabel>
        <Input {...rest} />
      </FormControl>
    </StyledGridCenterFormInput>
  );
};
