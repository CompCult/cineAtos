import { HeadCell } from '../../../interfaces/TableInterface';
import { FormatDate } from './functions/FormatDate';
import ViewAttribute from './functions/ViewAttribute';
import ViewAttributeBoolean from './functions/ViewAttributeBoolean';

const formatValues = (keys: HeadCell, value: string, row: any) => {
    if (keys.format?.includes('date')) {
        value = FormatDate(row[keys.id]);
    }

    if (keys.viewAttribute) {
        value = ViewAttribute(row[keys.id], keys.viewAttribute);
    }

    if (keys.viewAttributeBoolean) {
        value = ViewAttributeBoolean(row[keys.id], keys.viewAttributeBoolean);
    }

    return value;
}

export default formatValues;