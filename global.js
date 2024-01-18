window.addEventListener('DOMContentLoaded', (event) => {

    jQuery(function () {

        //create paragrap start
        function create_paragraph() {
            jQuery('#create-p').click(function () {
                var inputData = jQuery('#cf-input').val();
                if (inputData.trim().length === 0) {
                    alert("input kosong");
                    return;
                }
                var cleanedData = inputData.split('\n').filter(function (line) {
                    return line.trim().length > 0;
                }).map(function (line) {
                    return '<p>' + line.trim() + '</p>';
                }).join('\n');

                jQuery('#cf-input').val('');
                jQuery('#cf-output').val(cleanedData);
                navigator.clipboard.writeText(cleanedData);
            });
        }

        create_paragraph();
        //create paragrap end


        // create-h2 start
        function create_h2() {
            jQuery('#create-h2').click(function () {
                var inputData = jQuery('#cf-input').val();

                if (inputData.trim().length === 0) {
                    alert("input kosong");
                    return;
                }




                var cleanedData = inputData.split('\n').filter(function (line) {
                    return line.trim().length > 0;
                }).map(function (line) {
                    return '<h2>' + line.trim() + '</h2>';
                }).join('\n');

                jQuery('#cf-input').val('');
                jQuery('#cf-output').val(cleanedData);
                navigator.clipboard.writeText(cleanedData);
            });
        }

        create_h2();
        // create-h2 end

        // create-h3 start
        function create_h3() {
            jQuery('#create-h3').click(function () {
                var inputData = jQuery('#cf-input').val();

                if (inputData.trim().length === 0) {
                    alert("input kosong");
                    return;
                }


                var cleanedData = inputData.split('\n').filter(function (line) {
                    return line.trim().length > 0;
                }).map(function (line) {
                    return '<h3>' + line.trim() + '</h3>';
                }).join('\n');

                jQuery('#cf-input').val('');
                jQuery('#cf-output').val(cleanedData);
                navigator.clipboard.writeText(cleanedData);
            });
        }
        create_h3();
        // create-h3 end

        // create-h4 start
        function create_h4() {
            jQuery('#create-h4').click(function () {
                var inputData = jQuery('#cf-input').val();
                if (inputData.trim().length === 0) {
                    alert("input kosong");
                    return;
                }


                var cleanedData = inputData.split('\n').filter(function (line) {
                    return line.trim().length > 0;
                }).map(function (line) {
                    return '<h4>' + line.trim() + '</h4>';
                }).join('\n');

                jQuery('#cf-input').val('');
                jQuery('#cf-output').val(cleanedData);
                navigator.clipboard.writeText(cleanedData);
            });
        }
        create_h4();
        // create-h4 end

        // create-h5 start
        function create_h5() {
            jQuery('#create-h5').click(function () {
                var inputData = jQuery('#cf-input').val();
                if (inputData.trim().length === 0) {
                    alert("input kosong");
                    return;
                }


                var cleanedData = inputData.split('\n').filter(function (line) {
                    return line.trim().length > 0;
                }).map(function (line) {
                    return '<h5>' + line.trim() + '</h5>';
                }).join('\n');

                jQuery('#cf-input').val('');
                jQuery('#cf-output').val(cleanedData);
                navigator.clipboard.writeText(cleanedData);
            });
        }
        create_h5();
        // create-h5 end

        // create-h6 start
        function create_h6() {
            jQuery('#create-h6').click(function () {
                var inputData = jQuery('#cf-input').val();
                if (inputData.trim().length === 0) {
                    alert("input kosong");
                    return;
                }


                var cleanedData = inputData.split('\n').filter(function (line) {
                    return line.trim().length > 0;
                }).map(function (line) {
                    return '<h6>' + line.trim() + '</h6>';
                }).join('\n');

                jQuery('#cf-input').val('');
                jQuery('#cf-output').val(cleanedData);
                navigator.clipboard.writeText(cleanedData);
            });
        }
        create_h6();
        // create-h6 end


        //crate_ul start
        function create_ul() {
            jQuery('#create-ul').click(function () {
                //bungkus semua baris dengan <li> </li> lalu append <ul> </ul>
                var inputData = jQuery('#cf-input').val();
                if (inputData.trim().length === 0) {
                    alert("input kosong");
                    return;
                }


                var listItemData = inputData.split('\n').filter(function (line) {
                    return line.trim().length > 0;
                }).map(function (line) {
                    return '<li>' + line.trim() + '</li>';
                }).join('\n');

                var ulData = '<ul>\n' + listItemData + '\n</ul>';

                jQuery('#cf-input').val('');
                jQuery('#cf-output').val(ulData);
                navigator.clipboard.writeText(ulData);
            });
        }
        create_ul();
        //crate_ul end

        //crate_ol start
        function create_ol() {
            jQuery('#create-ol').click(function () {
                var inputData = jQuery('#cf-input').val();
                if (inputData.trim().length === 0) {
                    alert("input kosong");
                    return;
                }


                var listItemData = inputData.split('\n').filter(function (line) {
                    return line.trim().length > 0;
                }).map(function (line) {
                    return '<li>' + line.trim() + '</li>';
                }).join('\n');

                var ulData = '<ol>\n' + listItemData + '\n</ol>';

                jQuery('#cf-input').val('');
                jQuery('#cf-output').val(ulData);
                navigator.clipboard.writeText(ulData);
            });
        }
        create_ol();
        //crate_ol end

        //create-space-to-dash"
        function create_space_to_dash() {
            jQuery('#create-space-to-dash').click(function () {
                var inputData = jQuery('#cf-input').val();
                if (inputData.trim().length === 0) {
                    alert("input kosong");
                    return;
                }


                var modifiedData = inputData.replace(/\s+/g, '-');

                jQuery('#cf-output').val(modifiedData);
                navigator.clipboard.writeText(modifiedData);
                jQuery('#cf-input').val('');
            });
        }
        create_space_to_dash();
        //create-space-to-dash" end

        //create-space-to-underscore
        function create_space_to_underscore() {
            jQuery('#create-space-to-underscore').click(function () {
                var inputData = jQuery('#cf-input').val();
                if (inputData.trim().length === 0) {
                    alert("input kosong");
                    return;
                }


                var modifiedData = inputData.replace(/\s+/g, '_');

                jQuery('#cf-output').val(modifiedData);
                navigator.clipboard.writeText(modifiedData);
                jQuery('#cf-input').val('');
            });
        }

        create_space_to_underscore();
        //create-space-to-underscore end

        //create-space-to-20
        function create_space_to_20() {
            jQuery('#create-space-to-20').click(function () {
                var inputData = jQuery('#cf-input').val();
                if (inputData.trim().length === 0) {
                    alert("input kosong");
                    return;
                }


                var modifiedData = inputData.replace(/\s+/g, '%20');

                jQuery('#cf-output').val(modifiedData);
                navigator.clipboard.writeText(modifiedData);
                jQuery('#cf-input').val('');
            });
        }
        create_space_to_20();
        //create-space-to-20 end

        //create-space-to-plus
        function create_space_to_plus() {
            jQuery('#create-space-to-plus').click(function () {
                if (inputData.trim().length === 0) {
                    alert("input kosong");
                    return;
                }


                var inputData = jQuery('#cf-input').val();
                var modifiedData = inputData.replace(/\s+/g, '+');

                jQuery('#cf-output').val(modifiedData);
                navigator.clipboard.writeText(modifiedData);
                jQuery('#cf-input').val('');
            });
        }
        create_space_to_plus();
        //create-space-to-plus end

        //id="create-new-line-to-comma"
        function create_new_line_to_comma() {
            jQuery('#create-new-line-to-comma').click(function () {
                var inputData = jQuery('#cf-input').val();
                if (inputData.trim().length === 0) {
                    alert("input kosong");
                    return;
                }


                var lines = inputData.split('\n');
                var modifiedData = lines.map(function (line) {
                    return line.trim();
                }).join(', ');

                jQuery('#cf-output').val(modifiedData);
                navigator.clipboard.writeText(modifiedData);
                jQuery('#cf-input').val('');
            });
        }


        create_new_line_to_comma();
        //id="create-new-line-to-comma" end

        //create-comma-to-new-line
        function create_comma_to_new_line() {
            jQuery('#create-comma-to-new-line').click(function () {
                var inputData = jQuery('#cf-input').val();
                if (inputData.trim().length === 0) {
                    alert("input kosong");
                    return;
                }


                var modifiedData = inputData.replace(/,\s*/g, '\n');

                jQuery('#cf-output').val(modifiedData);
                navigator.clipboard.writeText(modifiedData);
                jQuery('#cf-input').val('');
            });
        }


        create_comma_to_new_line();

        //create-keyword-phrase
        function create_keyword_phrase() {
            jQuery('#create-keyword-phrase').click(function () {
                //sama seperti create p. hanya tambahkan " " di awal dan akhir.
                var inputData = jQuery('#cf-input').val();
                if (inputData.trim().length === 0) {
                    alert("input kosong");
                    return;
                }


                var listItemData = inputData.split('\n').filter(function (line) {
                    return line.trim().length > 0;
                }).map(function (line) {
                    return '"' + line.trim() + '"';
                }).join('\n');

                jQuery('#cf-input').val('');
                jQuery('#cf-output').val(listItemData);
                navigator.clipboard.writeText(listItemData);
            });
        }
        create_keyword_phrase();
        //create-keyword-phrase end

        //create-keyword-matched
        function create_keyword_matched() {
            jQuery('#create-keyword-matched').click(function () {
                var inputData = jQuery('#cf-input').val();
                if (inputData.trim().length === 0) {
                    alert("input kosong");
                    return;
                }


                var listItemData = inputData.split('\n').filter(function (line) {
                    return line.trim().length > 0;
                }).map(function (line) {
                    return '[' + line.trim() + ']';
                }).join('\n');


                jQuery('#cf-input').val('');
                jQuery('#cf-output').val(listItemData);
                navigator.clipboard.writeText(listItemData);
            });
        }
        create_keyword_matched();
        //create-keyword-matched end


        // prefix surfix container
        create_prefix_surfix();
        function create_prefix_surfix() {
            jQuery('#cf-pref-sur-wr').slideUp();
            jQuery('#cf-pref-btn-wr').slideUp();
            jQuery('#create-prefix-surfix').click(function () {
                jQuery('#cf-pref-sur-wr').slideToggle();
                jQuery('#cf-pref-btn-wr').slideToggle();
                jQuery('.cf-items-list').slideToggle();
            });

            // close-pref-suff
            jQuery('#close-pref-suff').click(function () {
                jQuery('#cf-pref-sur-wr').slideUp();
                jQuery('#cf-pref-btn-wr').slideUp();
                jQuery('.cf-items-list').slideDown();
            });

            jQuery('#create-prefix').click(function () {
                var prefix = jQuery('#prefix').val();
                var inputData = jQuery('#cf-input').val();
                if (inputData.trim().length === 0) {
                    alert("input kosong");
                    return;
                }


                var modifiedData = inputData.split('\n').filter(function (line) {
                    return line.trim().length > 0;
                }).map(function (line) {
                    return prefix + line;
                }).join('\n');

                jQuery('#cf-output').val(modifiedData);
                navigator.clipboard.writeText(modifiedData);
                jQuery('#cf-input').val('');
            });

            jQuery('#create-surfix').click(function () {
                var suffix = jQuery('#surfix').val();
                var inputData = jQuery('#cf-input').val();
                if (inputData.trim().length === 0) {
                    alert("input kosong");
                    return;
                }


                var modifiedData = inputData.split('\n').filter(function (line) {
                    return line.trim().length > 0;
                }).map(function (line) {
                    return line + suffix;
                }).join('\n');

                jQuery('#cf-output').val(modifiedData);
                navigator.clipboard.writeText(modifiedData);
                jQuery('#cf-input').val('');
            });
        }
        // prefix surfix container end


        // create-remove-duplicate-line
        function create_remove_duplicate_line() {
            jQuery('#create-remove-duplicate-line').click(function () {
                var inputData = jQuery('#cf-input').val();
                if (inputData.trim().length === 0) {
                    alert("input kosong");
                    return;
                }


                var lines = inputData.split('\n');
                var modifiedData = lines.filter(function (line, index, arr) {
                    return arr.indexOf(line) === index;
                }).join('\n');

                jQuery('#cf-output').val(modifiedData);
                navigator.clipboard.writeText(modifiedData);
                jQuery('#cf-input').val('');
            });
        }
        create_remove_duplicate_line();
        // create-remove-duplicate-line end


        //create-short-a-z
        function create_short_a_z() {
            jQuery('#create-short-a-z').click(function () {
                var inputData = jQuery('#cf-input').val();
                if (inputData.trim().length === 0) {
                    alert("input kosong");
                    return;
                }


                var lines = inputData.split('\n');
                var modifiedData = lines.sort().join('\n');

                jQuery('#cf-output').val(modifiedData);
                navigator.clipboard.writeText(modifiedData);
                jQuery('#cf-input').val('');
            });
        }
        create_short_a_z();
        //create-short-a-z end

        //create-short-z-a
        function create_short_z_a() {
            jQuery('#create-short-z-a').click(function () {
                var inputData = jQuery('#cf-input').val();
                if (inputData.trim().length === 0) {
                    alert("input kosong");
                    return;
                }


                var lines = inputData.split('\n');
                var modifiedData = lines.sort().reverse().join('\n');

                jQuery('#cf-output').val(modifiedData);
                navigator.clipboard.writeText(modifiedData);
                jQuery('#cf-input').val('');
            });
        }
        create_short_z_a();
        //create-short-z-a end


        //create-html-entity-converter
        function create_html_entity_converter() {
            jQuery('#create-html-entity-converter').click(function () {
                var inputData = jQuery('#cf-input').val();
                if (inputData.trim().length === 0) {
                    alert("input kosong");
                    return;
                }


                var modifiedData = inputData.replace(/[\u00A0-\u9999<>\&]/gim, function (i) {
                    return '&#' + i.charCodeAt(0) + ';';
                });

                jQuery('#cf-output').val(modifiedData);
                navigator.clipboard.writeText(modifiedData);
                jQuery('#cf-input').val('');
            });
        }
        create_html_entity_converter();
        //create-html-entity-converter end









        // redirect container
        create_redirect();
        function create_redirect() {
            jQuery('#redirect').slideUp();
            jQuery('#create-redirect').click(function () {
                jQuery('#redirect').slideToggle();
            });
        }



        //prism start
        create_prism();
        function create_prism() {
            jQuery('#cf-prism').slideUp();
            jQuery('#create-prism').click(function () {
                jQuery('#cf-prism').slideToggle();
                jQuery('.cf-items-list').slideToggle();
            });

            jQuery('.cf-prism-lang').click(function () {
                var lang = jQuery(this).text().toLowerCase();
                var inputData = jQuery('#cf-input').val();
                if (inputData.trim().length === 0) {
                    alert("input kosong");
                    return;
                }


                var convertedData = inputData.replace(/</g, '&lt;').replace(/>/g, '&gt;');
                var formattedData = '<pre><code class="line-numbers language-' + lang + '">' + convertedData + '</code></pre>';

                jQuery('#cf-output').val(formattedData);
                navigator.clipboard.writeText(formattedData);
                jQuery('#cf-input').val('');
            });

            //close-prism
            jQuery('#close-prism').click(function () {
                jQuery('#cf-prism').slideUp();
                jQuery('.cf-items-list').slideDown();
            });

        }
        //prism end


        // create-remove-not-contain (remove line not contain)
        function create_remove_not_contain() {
            jQuery('#remove-contain-not-contain-wr').slideUp();

            jQuery('#create-remove-contain-or-not-contain').click(function () {
                jQuery('#remove-contain-not-contain-wr').slideToggle();
                jQuery('.cf-items-list').slideToggle();
            });


            //remove-contain-not-contain-wr-close
            jQuery('#remove-contain-not-contain-wr-close').click(function () {
                jQuery('#remove-contain-not-contain-wr').slideUp();
                jQuery('.cf-items-list').slideDown();
            });
        }
        create_remove_not_contain();






        $("#cf-item-wr").draggable({ scroll: true, scrollSensitivity: 100 });





    });


});