'use client'
import { Button, Grid } from '@mui/material'
import React from 'react'
import uploadDocStyles from '@/styles/uploadDocStyles'
import Camera from '@/components/Camera'

export default function UploadDocuments() {
  return (
    <div className='upload-body'>
        <Grid container sx={uploadDocStyles.boxContainer}>
            <Grid item sx={uploadDocStyles.actionBox} xs={12}>
              
            </Grid>

        </Grid>
    </div>
  )
}
