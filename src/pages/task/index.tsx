import React from 'react'
import { NextPageWithLayout } from '../_app'
import DashboardLayout from '@/layouts/DashboardLayout'

const TaskIndexPage: NextPageWithLayout = () => {
  return (
    <div>TaskIndexPage</div>
  )
}

TaskIndexPage.getLayout = (page: React.ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>
}

export default TaskIndexPage