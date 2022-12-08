["vegan", "vegetarian", "gluten Free", "Nut Free", "Dairy Free"]



["basmati rice", "butter", "caster sugar", "ground cinnamon", "cardamom pods", "ground turmeric", "raisin"]


    < Card sx = {{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image="/static/images/cards/contemplative-reptile.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Lizard
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Welcome to my recipe cook book.
                                    </Typography>
                                </CardContent>
                                <CardActions>

                                    <Button onClick={handleOpen}>Open map here</Button>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style}>
                                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                                Text in a modal
                                            </Typography>
                                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                            </Typography>
                                        </Box>
                                    </Modal>

                                </CardActions>
                            </Card >

