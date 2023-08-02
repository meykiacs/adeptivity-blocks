export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};

export const pageInfo = {
  school: {
    avatarPath: './svg/school',
    field1: {
      type: 'text',
      name: 'name',
      label: 'Name',
    },
    field2: {
      type: 'number',
      name: 'stucount',
      label: 'Student Count',
    },
    field3: {
      type: 'date',
      name: 'dateofbirth',
      label: 'Date of Birth',
    },
    field4: {
      type: 'tel',
      name: 'phone',
      label: 'Phone Number',
    },
    field9: {
      type: 'text',
      name: 'school',
      label: 'School',
    },
    field10: {
      type: 'text',
      name: 'job',
      label: 'Job Title',
    },
  },
  teacher: {
    avatarPath: './svg/teacher',
    field1: {
      type: 'text',
      name: 'name',
      label: 'First Name',
    },
    field2: {
      type: 'text',
      name: 'family',
      label: 'Last Name',
    },
    field3: {
      type: 'date',
      name: 'estdate',
      label: 'Establishment Date',
      placeHolder: 'Establishment Date'
    },
    field4: {
      type: 'tel',
      name: 'phone',
      label: 'Phone / Fax',
      placeHolder: 'Phone / Fax'
    },
    field9: {
      type: 'text',
      name: 'principal',
      label: 'Principal Name',
      placeHolder: 'Principal Name'
    },
    field10: {
      type: 'text',
      name: 'principalphone',
      label: 'Principal Phone no',
      placeHolder: 'Principal Phone no.'
    },
  }
}