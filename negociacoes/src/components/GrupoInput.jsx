const GrupoInput (){
	return (
	<div className="form-group">
    <label htmlFor="quantidade">Quantidade</label>
    <input type="number" min="1" step="1" id="quantidade" class="form-control" value="1" required />
</div>
	);
}

export default GrupoInput;