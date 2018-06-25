<?php include '_header.php'; ?>

            <h2>SUBSCRIBE</h2>
            <div id="content" class="clearfix">
                <h3>RECIEVE MONTHLY NEWSLETTERS AND SPECIAL OFFERS!</h3>
            </div>
                <div class="row">
                    <div class="left">

                        <form action="FormToEmail.php" method="post" enctype="multipart/form-data" name="subscribe" id="subscribers">

                            <fieldset>
                                <legend><span>Personal Information</span></legend>
                                <label><b><span>Fullname:</span></b><input name="fullname" type="text" value="" placeholder="Full Name" pattern="[a-zA-Z -._]{3,99}" required ></label>

                                <label><b><span>Zip Code:</span></b><input name="zip" type="text" value="" placeholder="zip" pattern="[0-9._]{2,5}" required ></label>

                                <label><b><span>Email:</span></b><input formaction="FormToEmail.html" name="email" type="email" id="storm" required ></label>

                                <label><b><span>Phone:</span></b><input name="phone" type="tel" value="" placeholder="(555) 555-7890" pattern="[0-9]{10,20}" required ></label>
                            </fieldset>

                            <fieldset class="message"><p>Message:</p>
                                <textarea rows="4" cols="38" placeholder="Type here...">

                                </textarea>
                            </fieldset>

                            <input type="submit" value="Submit!" class="submitBtn">

                            <input name="subject" type="hidden" value="Conference Registration" >
                            <input name="redirect" type="hidden" value="thanksTest.html" >
                        </form>
                    </div>
                </div>

<?php include '_footer.php'; ?>
