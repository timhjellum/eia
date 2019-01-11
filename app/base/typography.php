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
    <?php include('adaptive/global/head/includes/head.inc') ?>
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
    <?php include('adaptive/global/header/includes/header.inc') ?>

    <h1 class="_h1">Homepage</h1>


    <div class="homepage">
        <div class="l-row l-full-width-col">
            <!-- div class="l-full-width-col" -->
                <h3 class="_h3">Headers - Primary</h3>

                <h1>H1 - The five boxing wizards jump quickly</h1>
                <h2>H2 - The five boxing wizards jump quickly</h2>
                <h3>H3 - The five boxing wizards jump quickly</h3>
                <h4>H4 - The five boxing wizards jump quickly</h4>
                <h5>H5 - The five boxing wizards jump quickly</h5>
                <h6>H6 - The five boxing wizards jump quickly</h6>

                <h3 class="_h3">Lists</h3>

                <ul>
                    <li>Donec eu libero at sem faucibus dapibus eleifend vitae neque.</li>
                    <li>Aenean a dui nec felis pellentesque rhoncus vel sed lectus.</li>
                    <li>Vestibulum aliquet ligula ac est auctor, et dapibus felis feugiat.</li>
                    <li>Maecenas molestie libero a fermentum posuere.</li>
                    <li>Nullam vestibulum nisl aliquet, viverra lacus ut, pretium velit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu,
                        sollicitudin lobortis felis. Curabitur fermentum tristique rhoncus. Maecenas aliquam, odio tincidunt
                        aliquam malesuada, dolor tellus finibus leo, vitae 1 justo nulla ac neque. Integer dictum
                        sit amet augue vitae aliquet. Donec risus dolor, accumsan at molestie sed, mollis in nunc. Nulla
                        eu diam sed metus pretium tristique id vel lorem. Ut a sapien sit amet erat suscipit tristique
                        in et augue.</li>
                </ul>



                <h3 class="_h3">Paragraph</h3>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu, sollicitudin
                    lobortis felis. Curabitur fermentum tristique rhoncus. Maecenas aliquam, odio tincidunt aliquam malesuada,
                    dolor tellus finibus leo, vitae<sub>10</sub> justo nulla ac neque. Integer dictum sit amet augue vitae
                    aliquet. Donec risus dolor, accumsan at molestie sed, mollis in nunc. Nulla eu diam sed metus pretium
                    tristique id vel lorem. Ut a sapien sit amet erat suscipit tristique in et augue. Orci varius natoque
                    penatibus et magnis dis parturient montes, nascetur ridiculus<sup>1</sup> mus. Praesent lorem ligula, maximus
                    quis ornare at, sollicitudin eget diam. Proin tempor ac arcu in fermentum. Etiam sed ultricies mi,
                    at laoreet neque. Integer dolor ante, placerat vel faucibus eget, congue id urna. Nunc vitae euismod
                    tellus.
                </p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacus nulla, interdum a tellus eu, sollicitudin
                    lobortis felis. Curabitur fermentum<sub>1234567890</sub> tristique rhoncus. Maecenas aliquam, odio tincidunt aliquam malesuada,
                    dolor tellus finibus leo, vitae justo nulla ac neque. Integer dictum sit amet augue vitae
                    aliquet. Donec risus dolor, accumsan at molestie sed, mollis in nunc. Nulla eu diam sed metus pretium
                    tristique id vel lorem. Ut a sapien sit amet erat suscipit tristique in et augue. Orci varius natoque
                    penatibus et magnis dis<sup>10</sup> parturient montes, nascetur ridiculus mus. Praesent lorem ligula, maximus
                    quis ornare at, sollicitudin eget diam. Proin tempor ac arcu in fermentum. Etiam sed ultricies mi,
                    at laoreet neque. Integer dolor ante, placerat vel faucibus eget, congue id urna. Nunc vitae euismod
                    tellus.
                </p>
            </div>
        </div>
    </div>
    <?php include('adaptive/global/footer/includes/footer.inc') ?>
</body>

</html>