import {
    createStyles,
    Theme,
    withStyles,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';

export const BootstrapInput = withStyles((theme: Theme) =>
    createStyles({
        input: {
            borderRadius: 10,
            position: 'relative',
            backgroundColor: theme.palette.common.white,
            border: '1px solid #ced4da',
            fontSize: 16,
            padding: '10px 8px 8px 8px',
            color: '#6e6e6e',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            // Use the system font instead of the default Roboto font.
            fontFamily: [
                'Roboto',
                'Arial',
                'sans-serif',
            ].join(','),
            '&:focus': {
                boxShadow: 'none',
                borderWidth: 2,
                borderColor: theme.palette.primary.main,
                borderRadius: 10,
            },
        },
    }),
)(InputBase);
