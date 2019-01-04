<!doctype html>
<?php
$pageTitle = "U.S. Energy Information Administration (EIA)";
$locale = 'test';
?>
    <html>

    <head>
        <title>
            <?=$pageTitle?>
        </title>
        <?php include('css_rehab/archive/global/head/includes/head.inc') ?>
        <style>
            h1._h1,
            h3._h3 {
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif !important;
                background-color: #666 !important;
                font-weight: bold !important;
                color: #fff !important;
                width: 100% !important;
                clear: both !important;
                padding: 5px !important;
                border: none !important;
            }

            h1._h1 {
                font-size: 14px !important;
                margin: 30px 0 !important;
            }

            h3._h3 {
                font-size: 12px !important;
                margin: 20px 0 !important;
            }
        </style>
    </head>

    <body>
        <?php include('css_rehab/archive/global/header/includes/header.inc') ?>
        <div class="l-row l-full-width-col">
            <!-- div class="l-full-width-col" -->
                <h1 class="_h1">Default tables (no styles)</h1>
                <table>
                        <caption>Caption<br />
                            <em>(Caption)</em></caption>
                    <thead>
                        <tr>
                            <th>thead</th>
                            <th>thead</th>
                            <th>thead</th>
                            <th>thead</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Lorem ipsum, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus
                                eu, sollicitudin lobortis felis.</td>
                            <td>Lorem ipsum</td>
                            <td>Lorem ipsum</td>
                            <td>Lorem ipsum</td>
                        </tr>
                        <tr>
                            <td>Lorem ipsum, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus
                                eu, sollicitudin lobortis felis.</td>
                            <td>Lorem ipsum</td>
                            <td>Lorem ipsum</td>
                            <td>Lorem ipsum</td>
                        </tr>
                        <tr>
                            <td>Lorem ipsum, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus
                                eu, sollicitudin lobortis felis.</td>
                            <td>Lorem ipsum</td>
                            <td>Lorem ipsum</td>
                            <td>Lorem ipsum</td>
                        </tr>
                        <tr>
                            <td>Lorem ipsum, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus
                                eu, sollicitudin lobortis felis.</td>
                            <td>Lorem ipsum</td>
                            <td>Lorem ipsum</td>
                            <td>Lorem ipsum</td>
                        </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                    <td>tfoot</td>
                    <td>tfoot</td>
                    <td>tfoot</td>
                    <td>tfoot</td>
                    </tr>
                    </foot>
                </table>
                <br />
                <br />
                <h3 class="_h3">Default Styles</h3>
                <div class="primary">
                    <table>
                        <caption>Caption<br />
                            <em>(Caption)</em></caption>
                        <thead>
                            <tr>
                                <th>thead</th>
                                <th>thead</th>
                                <th>thead</th>
                                <th>thead</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Lorem ipsum, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus
                                    eu, sollicitudin lobortis felis.</td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                            </tr>
                            <tr>
                                <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu, sollicitudin
                                        lobortis felis. Curabitur fermentum tristique rhoncus. Maecenas aliquam, odio tincidunt aliquam malesuada,
                                        dolor tellus finibus leo, vitae pulvinar justo nulla ac neque. Integer dictum sit amet augue vitae
                                        aliquet. Donec risus dolor, accumsan at molestie sed, mollis in nunc. Nulla eu diam sed metus pretium
                                        tristique id vel lorem.</td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                            </tr>
                            <tr>
                                <td>Lorem ipsum, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus
                                    eu, sollicitudin lobortis felis.</td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                            </tr>
                            <tr>
                                <td>Lorem ipsum, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus
                                    eu, sollicitudin lobortis felis.</td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                                <td>Lorem ipsum</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <td>tfoot</td>
                                <td>tfoot</td>
                                <td>tfoot</td>
                                <td>tfoot</td>
                            </tr>
                            </foot>
                    </table>
                </div>
            </div>
        </div>
        <?php include('css_rehab/archive/global/footer/includes/footer.inc') ?>
    </body>

    </html>