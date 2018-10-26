<?php
global $crm_interpreter_data;
$crm_interpreter_data = getInterpreterLanguges();
$this->load->view('interpreters/common/inc_twilio');
?>

<!DOCTYPE html>
<html lang="en">
<head>

    <?php $this->load->view('interpreters/common/interpreter/inc_meta'); ?>

    <title><?php echo $title; ?></title>

    <?php $this->load->view('interpreters/common/interpreter/inc_link_css'); ?>

    <?php $this->load->view('interpreters/common/interpreter/inc_inline_css'); ?>

    <?php
    foreach ($css as $file) {
        echo "\n\t\t"; ?>
        <link rel="stylesheet" href="<?php echo $file; ?>" type="text/css"/>
        <?php
    }
    echo "\n\t";
    ?>

    <?php $this->load->view('interpreters/common/interpreter/inc_js'); ?>

    <?php
    foreach ($js as $file) {
        echo "\n\t\t"; ?>
        <script src="<?php echo $file; ?>"></script>
        <?php
    }
    echo "\n\t";
    ?>
</head>

<body>
<div class="full-panel">
	<div class="offline-ui offline-ui-up" id="offline-ui">
		<div class="offline-ui-content">
		</div>
	  </div>
    <div class="dashboard-wrapper interpreter-dashboard">

        <?php $this->load->view('interpreters/common/interpreter/inc_top_bar'); ?>

        <?php $this->load->view('interpreters/common/interpreter/inc_navigation'); ?>

    </div>
    <!--dashboard-wrapper-->

    <div class="row"><!-- contant list -->

		<div class="col-md-12">
			<div class="" id="tdanger" style="display: none;">
				<div class="alert alert-danger" role="alert"></div>
			</div>
		</div>

		<div class="col-md-12">
            <?php echo $output; ?>
        </div>

    </div>
</div>

<?php $this->load->view('interpreters/common/interpreter/inc_modal'); ?>

<?php $this->load->view('interpreters/common/inc_call_popup'); ?>

<?php $this->load->view('interpreters/common/interpreter/inc_footer_js'); ?>
</body>
</html>
