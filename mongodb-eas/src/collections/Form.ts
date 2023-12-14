import { CollectionConfig } from 'payload/types'

const Form: CollectionConfig = {
  slug: 'Form',
  access : {
    read : () => true,
    update : () => true,
    delete : () => true,
    create : () => true
  },
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
        name: 'name',
        label: 'Student-name',
        type: 'text',
        required: true,
    },
    {
        name: 'Email',
        label: 'Email',
        type: 'text',
        unique: true,
        required: true,
    },
    {
        name: 'Asal_Sekolah',
        label: 'Asal Sekolah',
        type: 'text',
        required : true,
    },
    {
        name: 'Status',
        label: 'Status',
        type: 'radio',
        options: [
            {
              label: 'Waiting',
              value: 'Waiting',
            },
            {
              label: 'Rejected',
              value: 'Rejected',
            },
            {
                label: 'Accepted',
                value: 'Accepted',
            }
        ],
        defaultValue: 'Waiting', 
    },
    {
        name: 'Tanggal_Pendaftaran',
        label: 'Tanggal Pendaftaran',
        type: "date",
        admin: {
            date: {
                pickerAppearance: 'dayOnly',
                displayFormat: 'd MMM yyy',
            },
            }, 
        defaultValue: "new Date()",
    },
  ],
}

export default Form
