function Item(x, y, type, owner)
{
	VisualGameObject.call(this, x, y, type);

	this.owner = owner;
}

Item.prototype =
{				
	// item owner
	owner : null,

	destroyItem : function()
	{
		this.destroyVisualGameObject();
	},

	pickUp : function(creature)
	{
		this.owner = creature;

		g_level.getTile(this.x, this.y).item = null;
	},

	drop : function(x, y)
	{
		this.owner = null;
		this.x = x;
		this.x = y;

		g_level.getTile(x, y).item = this;
	}
};

extend(Item, VisualGameObject);
