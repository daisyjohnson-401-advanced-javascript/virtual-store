const CurrentGenre = (props) => {
    return (
        <>
        {console.log('props', props)}
        <ul>
            {props.CurrentGenre.map(movie => {
                return <li key={movie.id}>
                    {/* <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} /> */}
                    <h4>{movie.title}</h4>
                    <h5>Rating: {movie.vote_average}</h5>
                    <p>{movie.overview}</p>
                    <button onClick={() => props.addToFavorites(movie)}>Add to Watch List</button>
                </li>
            })}
        </ul>
        </>
    )
}

const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%',
    },
    cardContent: {
      flexGrow: 1,
    },
  }));

<Container className={classes.cardGrid} maxWidth="md">
<Grid container spacing={4}>
{props.CurrentGenre.map(movie => {
    <Grid item key={movie.id} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          title={movie.title}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
          {movie.title}
          </Typography>
          <Typography>
          Rating: {movie.vote_average}
          </Typography>
          <Typography>
          {movie.overview}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={() => props.addToFavorites(movie)}>
          Add to Watch List
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ))}
</Grid>
</Container>