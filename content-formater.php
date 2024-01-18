<?php

/**
 * Content Formater
 */

function mm_show_content_formater()
{
?>
    <div class="container">
        <div class="inner">


            <div id="cf-item-wr">

                <div id="cf-item-close">x</div>



                <?php echo mmcf_remove_contain_or_not_contain(); ?>
                <?php echo mmcf_image_convertor_to_webp(); ?>




                <div id="cf-pref-sur-wr" class="cf-item">
                    <div id="cf-pref-sur" class="cf-two-col">

                        <div class="cf-inner-col">
                            <label for="prefix">Prefix</label>
                            <input class="cf-input" type="text" name="prefix" id="prefix">

                        </div>
                        <div class="cf-inner-col">
                            <label for="surfix">surfix</label>
                            <input class="cf-input" type="text" name="surfix" id="surfix">
                        </div>
                    </div>
                </div>
                <div id="cf-pref-btn-wr" class="cf-item">
                    <ul>
                        <li id="create-prefix" class="pref-surf-btn cf-btn" data-tool="create-prefix">Run Prefix</li>
                        <li id="create-surfix" class="pref-surf-btn cf-btn" data-tool="create-surfix">Run Surfix</li>
                        <li id="close-pref-suff" class="pref-surf-btn-close cf-btn">Close</li>
                    </ul>
                </div>




                <div id="cf-input-textarea" class="cf-item">
                    <!-- text area for input start -->
                    <label for="cf-input">Input</label>
                    <textarea name="cf-input" id="cf-input" class="cf-textarea" cols="30" rows="5"></textarea>
                    <!-- text area for input end -->

                    <!-- prism start -->
                    <div id="cf-prism">
                        <ul>
                            <li class="cf-prism-lang">HTML</li>
                            <li class="cf-prism-lang">PHP</li>
                            <li class="cf-prism-lang">CSS</li>
                            <li class="cf-prism-lang">JS</li>
                            <li class="cf-prism-lang">SQL</li>
                            <li class="cf-prism-lang">Bash</li>
                            <li class="cf-prism-lang">Git</li>
                            <li class="cf-prism-lang">JSON</li>
                            <li class="cf-prism-lang">Markdown</li>
                            <li class="cf-prism-lang">Python</li>
                            <li class="cf-prism-lang">SCSS</li>
                            <li class="cf-prism-lang">YAML</li>
                            <li class="cf-prism-lang">Java</li>
                            <li class="cf-prism-lang">C#</li>
                            <li class="cf-prism-lang">C++</li>
                            <li class="cf-prism-lang">Go</li>
                            <li id="close-prism" class="cf-btn">Close Prism</li>
                        </ul>
                    </div>

                    <!-- prism end -->
                </div>

                <!-- Content Formater tools -->
                <div class="cf-item">
                    <ul class="cf-items-list">
                        <li id="create-p" data-tool="create-paragraph">P</li>
                        <li id="create-h2" data-tool="create-head-2">H2</li>

                        <li id="create-h3" data-tool="create-head-3">H3</li>


                        <li id="create-h4" data-tool="create-head-4">H4</li>
                        <li id="create-h5" data-tool="create-head-5">H5</li>
                        <li id="create-h6" data-tool="create-head-6">H6</li>
                        <li id="create-ol" data-tool="create-ol">OL</li>


                        <li id="create-ul" data-tool="create-ul">UL</li>


                        <!-- space to dash -->
                        <li id="create-space-to-dash" data-tool="space-to-dash">Space to dash</li>


                        <!-- space to underscore -->
                        <li id="create-space-to-underscore" data-tool="space-to-underscore">Space to underscore</li>
                        <!-- space to %20 -->
                        <li id="create-space-to-20" data-tool="space-to-%20">Space to %20</li>

                        <!-- space to + -->
                        <li id="create-space-to-plus" data-tool="space-to-plus">Space to +</li>


                        <!-- new line to comma -->
                        <li id="create-new-line-to-comma" data-tool="new-line-to-comma">New line to comma</li>
                        <!-- comma to newline -->
                        <li id="create-comma-to-new-line" data-tool="comma-to-new-line">Comma to newline</li>
                        <!-- add prefix -->
                        <li id="create-prefix-surfix" data-tool="add-prefix">Pref/Surf</li>


                        <!-- keyword phrase -->
                        <li id="create-keyword-phrase" data-tool="keyword-phrase">Keyword phrase</li>
                        <!-- keyword matched -->
                        <li id="create-keyword-matched" data-tool="keyword-matched">Keyword matched</li>
                        <!-- redirect maker -->
                        <li id="create-redirect" data-tool="redirect-maker">Redirect maker</li>
                        <!-- prism maker -->
                        <li id="create-prism" data-tool="prism-maker">Prism maker</li>
                        <!-- lorem ipsum maker -->
                        <li data-tool="lorem-ipsum-maker">Lorem ipsum maker</li>


                        <!-- image convertor to webp-->
                        <li id="create-image-converter" data-tool="image-convertor-to-webp">Image convertor to webp</li>

                        <!-- remove duplicate lines -->
                        <li id="create-remove-duplicate-line" data-tool="remove-duplicate-lines">Remove duplicate lines</li>

                        <!-- shorting A/Z -->
                        <li id="create-short-a-z" data-tool="short-a-z">Short A/Z</li>

                        <!-- shorting Z/A -->
                        <li id="create-short-z-a" data-tool="short-z-a">Short Z/A</li>

                        <!-- HTML Entity Converter -->
                        <li id="create-html-entity-converter" data-tool="html-entity-converter">HTML Entity Converter</li>

                        <!-- remove not contain -->
                        <li id="create-remove-contain-or-not-contain" data-tool="remove-not-contain">Remove Contain or Not Contain</li>


                    </ul>
                </div>





                <div id="redirect">
                    <div id="redirect-close">x</div>
                    <div id="redirect-top" class="redirect-inner">

                        <!-- redirect left -->
                        <div id="redirect-left" class="redirect-col cf-item">
                            <label for="redirect-from">Redirect from</label>
                            <textarea name="redirect-from" id="" cols="20" rows="3" class="cf-textarea"></textarea>
                        </div>


                        <!-- redirect right -->
                        <div id="redirect-right" class="redirect-col cf-item">
                            <label for="redirect-to">Redirect to</label>
                            <textarea name="redirect-to" id="" cols="20" rows="3" class="cf-textarea"></textarea>
                        </div>
                    </div>
                    <div id="redirect-bot" class="redirect-inner">
                        <ul>
                            <li class="cf-btn">Copys</li>
                            <li class="cf-btn">Reset</li>
                        </ul>
                    </div>
                </div>













                <!-- content formater output -->

                <div id="cf-output-textarea" class="cf-item">
                    <!-- text area for output -->
                    <textarea name="cf-output" id="cf-output" class="cf-textarea" cols="30" rows="5"></textarea>

                    <div class="cf-item-inner row">
                        <ul id="copy-reset">
                            <li id="copy-result" class="cf-btn">Copy</li>
                            <li id="reset-result" class="cf-btn">Reset</li>
                        </ul>
                    </div>



                </div>


























            </div>










        </div>
    </div>
<?php
}









function mmcf_remove_contain_or_not_contain()
{
?>
    <div id="remove-contain-not-contain-wr">
        <!-- contain -->
        <div class="remove-contain-not-contain">
            <label for="contain">Remove Line if Contain</label>
            <input type="text" name="remove-contain" id="remove-contain">
            <div id="create-remove-if-contain" class="cf-btn">Remove if Contain</div>
        </div>

        <!-- not contain -->
        <div class="remove-contain-not-contain">
            <label for="not-contain">Remove Line if Not Contain</label>
            <input type="text" name="remove-not-contain" id="remove-not-contain">
            <div id="create-remove-if-not-contain" class="cf-btn">Remove if Not Contain</div>
        </div>
        <div id="remove-contain-not-contain-wr-close">close</div>
    </div>
<?php
}






/**
 * Image Converter to Webp
 */

function mmcf_image_convertor_to_webp()
{
?>
    <div id="image-converter-wr">
        <div id="image-dropper" class="image-converter-box"><span>Drag and Drop Here</span></div>
        <div id="image-result" class="image-converter-box"><span>Result is Here</span></div>
        <div id="image-converter-close" class="cf-btn">Close</div>
    </div>
<?php
}
