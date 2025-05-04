import React from 'react'
import { NextPageWithLayout } from '../_app'
import DashboardLayout from '@/layouts/DashboardLayout'

const StatisticIndexPage: NextPageWithLayout = () => {
  return (
    <div>StatisticIndexPage</div>
  )
}

StatisticIndexPage.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default StatisticIndexPage