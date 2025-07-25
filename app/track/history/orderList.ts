// 订单列表数据，供多个页面复用

export const orderList = [
  {
    id: '1Z999AA10123457001',
    status: 'Pending Pickup',
    summary: 'Alice → Bob, 2.0kg, Standard',
    href: '/track/detail',
    createdAt: '2025-07-11',
    sender: {
      name: 'Alice',
      email: 'alice@email.com',
      phone: '+49 100000015',
      address: 'Aliceweg 15',
      city: 'Berlin',
      postalCode: '10115',
      country: 'Germany',
    },
    recipient: {
      name: 'Bob', email: 'bob@email.com', phone: '+49 100000013', address: 'Bobweg 13', city: 'Essen', postalCode: '45127', country: 'Germany',
    },
    package: {
      packageType: 'Standard', weight: '2.0', length: '30', width: '20', height: '15', description: 'Books', serviceType: 'Standard', insurance: 'No', needsPallet: 'No', palletSize: '', trackingUrl: 'https://www.ups.com/track?loc=en_US&tracknum=1Z999AA10123457001',
    },
    timeline: [],
  },
  {
    id: '1Z999AA10123457002',
    status: 'Pending Pickup',
    summary: 'Carol → Dave, 1.5kg, Express',
    href: '/track/detail',
    createdAt: '2025-07-11',
    sender: {
      name: 'Carol', email: 'carol@email.com', phone: '+49 100000016', address: 'Carolplatz 16', city: 'Munich', postalCode: '80331', country: 'Germany',
    },
    recipient: {
      name: 'Dave', email: 'dave@email.com', phone: '+49 100000012', address: 'Davestreet 12', city: 'Nuremberg', postalCode: '90402', country: 'Germany',
    },
    package: {
      packageType: 'Express', weight: '1.5', length: '25', width: '18', height: '12', description: 'Electronics', serviceType: 'Express', insurance: 'Yes (insured up to €200)', needsPallet: 'No', palletSize: '', trackingUrl: 'https://www.ups.com/track?loc=en_US&tracknum=1Z999AA10123457002',
    },
    timeline: [],
  },
  {
    id: '1Z999AA10123457003',
    status: 'Pending Pickup',
    summary: 'Eve → Frank, 3.1kg, Standard',
    href: '/track/detail',
    createdAt: '2025-07-10',
    sender: {
      name: 'Eve', email: 'eve@email.com', phone: '+49 100000017', address: 'Eveweg 17', city: 'Hamburg', postalCode: '20095', country: 'Germany',
    },
    recipient: {
      name: 'Frank', email: 'frank@email.com', phone: '+49 100000011', address: 'Frankallee 11', city: 'Hannover', postalCode: '30159', country: 'Germany',
    },
    package: {
      packageType: 'Standard', weight: '3.1', length: '35', width: '22', height: '18', description: 'Clothes', serviceType: 'Standard', insurance: 'No', needsPallet: 'No', palletSize: '', trackingUrl: 'https://www.ups.com/track?loc=en_US&tracknum=1Z999AA10123457003',
    },
    timeline: [],
  },
  {
    id: '1Z999AA10123457004',
    status: 'In Transit',
    summary: 'Grace → Henry, 2.8kg, Express',
    href: '/track/detail',
    createdAt: '2025-07-12',
    sender: {
      name: 'Grace', email: 'grace@email.com', phone: '+49 100000018', address: 'Graceweg 18', city: 'Stuttgart', postalCode: '70173', country: 'Germany',
    },
    recipient: {
      name: 'Henry', email: 'henry@email.com', phone: '+49 100000010', address: 'Henryplatz 10', city: 'Bremen', postalCode: '28195', country: 'Germany',
    },
    package: {
      packageType: 'Express', weight: '2.8', length: '28', width: '19', height: '14', description: 'Shoes', serviceType: 'Express', insurance: 'Yes (insured up to €200)', needsPallet: 'No', palletSize: '', trackingUrl: 'https://www.ups.com/track?loc=en_US&tracknum=1Z999AA10123457004',
    },
    timeline: [],
  },
  {
    id: '1Z999AA10123457005',
    status: 'In Transit',
    summary: 'Ivy → Jack, 1.2kg, Standard',
    href: '/track/detail',
    createdAt: '2025-07-11',
    sender: {
      name: 'Ivy', email: 'ivy@email.com', phone: '+49 100000019', address: 'Ivyweg 19', city: 'Düsseldorf', postalCode: '40210', country: 'Germany',
    },
    recipient: {
      name: 'Jack', email: 'jack@email.com', phone: '+49 100000009', address: 'Jackgasse 9', city: 'Dresden', postalCode: '01067', country: 'Germany',
    },
    package: {
      packageType: 'Standard', weight: '1.2', length: '22', width: '16', height: '10', description: 'Toys', serviceType: 'Standard', insurance: 'No', needsPallet: 'No', palletSize: '', trackingUrl: 'https://www.ups.com/track?loc=en_US&tracknum=1Z999AA10123457005',
    },
    timeline: [],
  },
  {
    id: '1Z999AA10123457006',
    status: 'In Transit',
    summary: 'Kate → Leo, 2.5kg, Express',
    href: '/track/detail',
    createdAt: '2025-07-11',
    sender: {
      name: 'Kate', email: 'kate@email.com', phone: '+49 100000020', address: 'Kateweg 20', city: 'Leipzig', postalCode: '04109', country: 'Germany',
    },
    recipient: {
      name: 'Leo', email: 'leo@email.com', phone: '+49 100000008', address: 'Leoring 8', city: 'Leipzig', postalCode: '04109', country: 'Germany',
    },
    package: {
      packageType: 'Express', weight: '2.5', length: '27', width: '18', height: '13', description: 'Cosmetics', serviceType: 'Express', insurance: 'Yes (insured up to €200)', needsPallet: 'No', palletSize: '', trackingUrl: 'https://www.ups.com/track?loc=en_US&tracknum=1Z999AA10123457006',
    },
    timeline: [],
  },
  {
    id: '1Z999AA10123457007',
    status: 'In Transit',
    summary: 'Mona → Nick, 1.7kg, Standard',
    href: '/track/detail',
    createdAt: '2025-07-10',
    sender: {
      name: 'Mona', email: 'mona@email.com', phone: '+49 100000021', address: 'Monaplatz 21', city: 'Frankfurt', postalCode: '60311', country: 'Germany',
    },
    recipient: {
      name: 'Nick', email: 'nick@email.com', phone: '+49 100000022', address: 'Nickstr. 22', city: 'Berlin', postalCode: '10115', country: 'Germany',
    },
    package: {
      packageType: 'Standard', weight: '1.7', length: '24', width: '17', height: '11', description: 'Accessories', serviceType: 'Standard', insurance: 'No', needsPallet: 'No', palletSize: '', trackingUrl: 'https://www.ups.com/track?loc=en_US&tracknum=1Z999AA10123457007',
    },
    timeline: [],
  },
  {
    id: '1Z999AA10123457008',
    status: 'In Transit',
    summary: 'Olivia → Paul, 2.9kg, Express',
    href: '/track/detail',
    createdAt: '2025-07-10',
    sender: {
      name: 'Olivia', email: 'olivia@email.com', phone: '+49 100000023', address: 'Oliviaring 23', city: 'Cologne', postalCode: '50667', country: 'Germany',
    },
    recipient: {
      name: 'Paul', email: 'paul@email.com', phone: '+49 100000006', address: 'Paulstr. 6', city: 'Cologne', postalCode: '50667', country: 'Germany',
    },
    package: {
      packageType: 'Express', weight: '2.9', length: '29', width: '19', height: '14', description: 'Gifts', serviceType: 'Express', insurance: 'Yes (insured up to €200)', needsPallet: 'No', palletSize: '', trackingUrl: 'https://www.ups.com/track?loc=en_US&tracknum=1Z999AA10123457008',
    },
    timeline: [],
  },
  // 已完成订单示例
  {
    id: '1Z999AA10123457009',
    status: 'Delivered',
    summary: 'Peter → Rose, 2.3kg, Standard',
    href: '/track/detail',
    createdAt: '2025-07-09',
    sender: {
      name: 'Peter',
      email: 'peter@email.com',
      phone: '+49 100000024',
      address: 'Peterstr. 24',
      city: 'Hamburg',
      postalCode: '20095',
      country: 'Germany',
    },
    recipient: {
      name: 'Rose',
      email: 'rose@email.com',
      phone: '+49 100000025',
      address: 'Rosering 25',
      city: 'Munich',
      postalCode: '80331',
      country: 'Germany',
    },
    package: {
      packageType: 'Standard', weight: '2.3', length: '32', width: '21', height: '16', description: 'Kitchenware', serviceType: 'Standard', insurance: 'No', needsPallet: 'No', palletSize: '', trackingUrl: 'https://www.ups.com/track?loc=en_US&tracknum=1Z999AA10123457009',
    },
    timeline: [],
  },
  // 已取消订单示例
  {
    id: '1Z999AA10123457010',
    status: 'Cancelled',
    summary: 'Sam → Tina, 1.8kg, Express',
    href: '/track/detail',
    createdAt: '2025-07-08',
    sender: {
      name: 'Sam',
      email: 'sam@email.com',
      phone: '+49 100000026',
      address: 'Samweg 26',
      city: 'Stuttgart',
      postalCode: '70173',
      country: 'Germany',
    },
    recipient: {
      name: 'Tina',
      email: 'tina@email.com',
      phone: '+49 100000027',
      address: 'Tinaplatz 27',
      city: 'Frankfurt',
      postalCode: '60311',
      country: 'Germany',
    },
    package: {
      packageType: 'Express', weight: '1.8', length: '26', width: '17', height: '12', description: 'Stationery', serviceType: 'Express', insurance: 'No', needsPallet: 'No', palletSize: '', trackingUrl: 'https://www.ups.com/track?loc=en_US&tracknum=1Z999AA10123457010',
    },
    timeline: [],
  },
]; 