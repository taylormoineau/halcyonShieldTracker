{/* <MenuBookIcon />
        <form className={classes.form} onSubmit={submitNewBook}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="bookTitle"
            label="Book Title"
            onChange={e => setTitleState(e.target.value)}
          />
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel ref={inputLabel} id="demo-simple-select-outlined-label">
              Pages
            </InputLabel>
            
          </FormControl>

          

          <Typography component="h3" variant="h5" className={classes.error}>
            {error}
          </Typography>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {'CREATE'}
          </Button>
        </form>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Book id:</TableCell>
              <TableCell align="right">Title:</TableCell>
              <TableCell align="right">Author:</TableCell>
              <TableCell align="right">Date Created:</TableCell>
              <TableCell align="right">Last Edited By:</TableCell>
              <TableCell align="right">Date of Last Edit:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {booksState.map(
              ({
                id,
                title,
                author,
                created_date,
                edited_by_user,
                edited_date,
                author_id
              }) => (
                <TableRow key={id}>
                  <TableCell component="th" scope="row">
                    {id}
                  </TableCell>
                  <TableCell align="right">
                    <Link>
                      <RRLink to={'/book/' + id} id={id}>
                        {title}
                      </RRLink>
                    </Link>
                  </TableCell>
                  <TableCell align="right">
                    <Paper color="primary" className={classes.userPaper}>
                      <RRLink
                        className={classes.authorLink}
                        to={'/UserInfo/' + author_id}
                        author_id={author_id}
                      >
                        <Link variant="body2">{author}</Link>
                      </RRLink>
                    </Paper>
                  </TableCell>
                  <TableCell align="right">
                    {new Date(created_date).toDateString()}
                  </TableCell>
                  <TableCell align="right">{edited_by_user}</TableCell>
                  <TableCell align="right">{edited_date}</TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer> */}