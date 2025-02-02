// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import TrendingUp from 'mdi-material-ui/TrendingUp'
import ClipboardAlert from 'mdi-material-ui/ClipboardAlert'

import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import Cannabis from 'mdi-material-ui/Cannabis'
import AccountGroup from 'mdi-material-ui/AccountGroup'

const StatisticsCard = ({ data }) => {
  const salesData = [
    {
      stats: data.outOfStockCount,
      color: 'warning',
      title: 'Out of Stock',
      icon: <ClipboardAlert sx={{ fontSize: '1.75rem' }} />
    },
    {
      stats: data.totalProductsCount,
      title: 'Cannabis Products',
      color: 'primary',
      icon: <Cannabis sx={{ fontSize: '1.75rem' }} />
    },
    {
      stats: data.memberCount,
      title: 'Members',
      color: 'success',
      icon: <AccountGroup sx={{ fontSize: '1.75rem' }} />
    }
  ]
  const renderStats = () => {
    return salesData.map((item, index) => (
      <Grid item xs={12} sm={4} key={index}>
        <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
          <Avatar
            variant='rounded'
            sx={{
              mr: 3,
              width: 44,
              height: 44,
              boxShadow: 3,
              color: 'common.white',
              backgroundColor: `${item.color}.main`
            }}
          >
            {item.icon}
          </Avatar>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='caption'>{item.title}</Typography>
            <Typography variant='h6'>{item.stats}</Typography>
          </Box>
        </Box>
      </Grid>
    ))
  }
  return (
    <Card>
      <CardHeader
        title='Overview'
        action={
          <IconButton
            size='small'
            aria-label='settings'
            className='card-more-options'
            sx={{ color: 'text.secondary' }}
          ></IconButton>
        }
        subheader={
          <Typography variant='body2'>
            <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}></Box> Overall Data
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
      <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={[5, 0]}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  )
}

export default StatisticsCard
