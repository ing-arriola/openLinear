import { Card, CardContent, CardHeader, Grid } from '@mui/material';
import { NextPage } from 'next';
import { NewEntry } from '../components/forms';
import { Layout } from '../components/layouts';
import { EntryList } from '../components/ui';

const HomePage: NextPage = () => {
  return (
    <Layout title="Home">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Pendings" />
            <NewEntry />
            <EntryList status="todo" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="In Progress" />

            <EntryList status="in-progress" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title="Done" />

            <EntryList status="done" />
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default HomePage;
