import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, boolean, object, array, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Select from '../Select';

const selectName = text('field.name', 'someSelect');
const isMulti = boolean('isMulti', false);

const options = isMulti
  ? array('options', [
      { label: 'Option #1', value: 'option1' },
      { label: 'Option #2', value: 'option2' },
    ])
  : [text('options', { label: 'Some Option', value: 'option1' })];

storiesOf('Form/Select', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withInfo()(() => (
      <>
        <h3 style={{ textAlign: 'center', marginTop: '2rem' }}>
          Please Note: This component&apos;s story has no context of Formik and will not function
          properly.
        </h3>

        <Select
          disabled={boolean('disabled', false)}
          field={{ name: selectName }}
          form={object('form', {
            touched: { [selectName]: false },
            errors: { [selectName]: '' },
            setFieldTouched: action('setFieldTouched'),
            setFieldValue: action('setFieldValue'),
          })}
          id={text('id', '')}
          isLabelHidden={boolean('isLabelHidden', false)}
          isMulti={isMulti}
          label={text('label', 'Some Select:')}
          options={options}
          placeholder={text('placeholder', '')}
        />
      </>
    )),
  );