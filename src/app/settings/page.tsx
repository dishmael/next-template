import { Button } from '@/components/ui/button';
import React from 'react'

const SettingsPage = () => {
  return (
    <div className="flex flex-1 flex-col gap-2 p-4 lg:gap-4 lg:p-4 h-full">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Settings</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            This is the settings page
          </h3>
          <p className="text-sm text-muted-foreground">
            You can view and modify application settings on this page.
          </p>
          <Button className="mt-4">Settings Button</Button>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage
