import { viewAttributeBoolean } from '../../../../interfaces/TableInterface';

const viewAttribute = (obj: boolean, attribute: viewAttributeBoolean): string => {
    return obj ? attribute.primaryLabel : attribute.secundaryLabel;
}

export default viewAttribute;