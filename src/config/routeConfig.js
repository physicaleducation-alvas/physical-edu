export const navRoutes = [
  {
    name: 'About',
    path: '/about',
    id: 'about',
    dropdown: [
      {
        name: 'AEF',
        path: '/about/aef',
        id: 'aef',
      },
      {
        name: 'About College',
        path: '/about/about-college',
        id: 'about-college',
      },
      {
        name: 'Chairman Message',
        path: '/about/chairman-message',
        id: 'chairman-message',
      },
      {
        name: 'Principal Message',
        path: '/about/principal-message',
        id: 'principal-message',
      },
    ],
  },
  {
    name: 'College',
    path: '/college',
    id: 'college',
    dropdown: [
      {
        name: 'Courses',
        path: '/college/courses',
        id: 'courses',
      },
      {
        name: 'Teaching',
        path: '/college/teaching',
        id: 'teaching',
      },
      {
        name: 'Staff List',
        path: '/college/staff-list',
        id: 'staff-list',
      },
      {
        name: 'Student List',
        path: '/college/student-life',
        id: 'student-life',
      },
      {
        name: 'Placements',
        path: '/college/placements',
        id: 'placements',
      },
      {
        name: 'Infrastructure',
        path: '/college/infrastructure',
        id: 'infrastructure',
      },
    ]
  },
  {
    name: 'Mandatory Disclosures',
    path: '/mandatory-disclosures',
    id: 'mandatory-disclosures',
    dropdown: [
      {
        name: 'Affidavit',
        path: '/mandatory-disclosures/affidavit',
        id: 'affidavit',
      },
      {
        name: 'Balance sheet',
        path: '/mandatory-disclosures/balance-sheet',
        id: 'balance-sheet',
      },
      {
        name: 'Receipts and Payments',
        path: '/mandatory-disclosures/receipts-and-payments',
        id: 'reciepts-and-payments',
      },
      {
        name: 'Income and Expenditure',
        path: '/mandatory-disclosures/income-and-expenditure',
        id: 'income-and-expenditure',
      },
      {
        name: 'Funds',
        path: '/mandatory-disclosure/funds',
        id: 'funds',
      },
      {
        name: 'Fee Structure',
        path: '/mandatory-disclosure/fee-structure',
        id: 'fee-structure',
      },
      {
        name: 'Land Document',
        path: '/mandatory-disclosure/land-document',
        id: 'land-document',
      },
      {
        name: 'FDR and RDR',
        path: '/mandatory-disclosure/fdr-and-rdr',
        id: 'fdr-and-rdr',
      },
      {
        name: 'NCTE Order',
        path: '/mandatory-disclosure/ncte-order',
        id: 'ncte-order',
      },
      {
        name: 'Audit Report',
        path: '/mandatory-disclosure/audir-report',
        id: 'audit-report',
      },
      {
        name: 'Nil Encumbrance Certificate',
        path: '/mandatory-disclosure/nil-encumbrance-certificate',
        id: 'nil-encumbrance-certificate',
      }
    ]
  },
  {
    name: 'Activites',
    path: '/activities',
    id: 'activites',
    dropdown: [
      {
        name: 'Intramural',
        path: '/activities/intramural',
        id: 'intramural',
      },
      {
        name: 'Extramural',
        path: '/activites/extramural',
        id: 'extramural',
      },
      {
        name: 'Trekking Programme',
        path: '/activities/trekking-programme',
        id: 'trekking-programme',
      },
    ]
  },
  {
    name: 'NCTE',
    path: 'https://web.ncte.gov.in/',
    id: 'ncte',
  },
  {
    name: 'Campus Life',
    path: '/campus-life',
    id: 'campus-life',
    dropdown: [
      {
        name: 'Achievements',
        path: '/campus-life/achievements',
        id: 'achievements',
      },
      {
        name: 'Celebrations',
        path: '/campus-life/celebrations',
        id: 'celebrations'
      }
    ]
  },
  {
    name: 'Contact',
    path: '/contact',
    id: 'contact',
  },
];